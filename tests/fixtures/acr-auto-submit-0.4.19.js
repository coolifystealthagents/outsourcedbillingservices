// Test-only capture from https://acrtracking.stealthagents.us/v1/tracker.js, inspected 2026-11-11.
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || form.tagName !== 'FORM') return;
    _captureFormSnapshot(form);
    var lastCta = null;
    try {
      var raw = sessionStorage.getItem('_acr_last_cta');
      if (raw) {
        lastCta = JSON.parse(raw);
        if (Date.now() - lastCta.timestamp > 30 * 60 * 1000) lastCta = null;
      }
    } catch (e2) {}

    // ACR-499: hint-based field scan to capture PII from nameless inputs
    var scanned = _scanFormFields(form);
    var meta = {
      form_id: form.id || '',
      form_action: form.action || '',
      form_method: form.method || '',
      form_name: form.getAttribute('name') || '',
      form_classes: form.className || '',
      field_count: form.elements.length
    };
    // Include scanned lead fields in form_submit metadata
    if (scanned.lead_name) meta.lead_name = scanned.lead_name;
    if (scanned.lead_email) meta.lead_email = scanned.lead_email;
    if (scanned.lead_phone) meta.lead_phone = scanned.lead_phone;
    if (scanned.lead_message) meta.lead_message = scanned.lead_message;
    if (lastCta) {
      meta.attributed_cta_text = lastCta.text;
      meta.attributed_cta_href = lastCta.href;
      meta.attributed_cta_id = lastCta.id;
    }
    track('form_submit', meta);

    // Auto-fire trackLead if we captured any contact info from the form
    if (scanned.lead_email || scanned.lead_phone || scanned.lead_name) {
      var formId = form.id || form.getAttribute('name') || 'form';
      trackLead({
        name: scanned.lead_name || '',
        email: scanned.lead_email || '',
        phone: scanned.lead_phone || '',
        message: scanned.lead_message || '',
        source: formId,
        formId: formId
      });
    } else {
      flush(); // Forms are conversion-critical — flush immediately
    }
  }, true);
