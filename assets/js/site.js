const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const modal=document.createElement('div');
modal.className='project-modal';
modal.id='start-project';
modal.setAttribute('aria-hidden','true');
modal.innerHTML=`<div class="project-modal-backdrop" data-close-modal></div><div class="project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><div class="project-modal-head"><div><div class="eyebrow">Project enquiry</div><h2 id="project-modal-title">Tell us what you're building.</h2><p>Share the essentials and attach plans or supporting documents if you have them.</p></div><button class="project-modal-close" type="button" aria-label="Close project enquiry" data-close-modal>×</button></div><form name="project-enquiry" method="POST" action="/thank-you.html" enctype="multipart/form-data" data-netlify="true" data-netlify-honeypot="bot-field"><input type="hidden" name="form-name" value="project-enquiry"><p class="hidden-field"><label>Do not fill this out: <input name="bot-field"></label></p><div class="form-row"><div class="field"><label for="modal-name">Name *</label><input id="modal-name" name="name" autocomplete="name" required></div><div class="field"><label for="modal-company">Company / Organization</label><input id="modal-company" name="company" autocomplete="organization"></div></div><div class="form-row"><div class="field"><label for="modal-email">Email *</label><input id="modal-email" type="email" name="email" autocomplete="email" required></div><div class="field"><label for="modal-phone">Phone *</label><input id="modal-phone" type="tel" name="phone" autocomplete="tel" required></div></div><div class="form-row"><div class="field"><label for="modal-service">Project type</label><select id="modal-service" name="service"><option>General construction</option><option>Water works</option><option>Road works</option><option>Structural steel</option><option>Borehole services</option><option>Repairs & renovation</option><option>Other</option></select></div><div class="field"><label for="modal-location">Project location</label><input id="modal-location" name="location" placeholder="Town / County"></div></div><div class="field"><label for="modal-message">Project details *</label><textarea id="modal-message" name="message" required placeholder="Tell us about the scope, timing and what you need from Borabu Builders."></textarea></div><div class="field upload-field"><label for="modal-project-file">Attach plans or supporting documents</label><input id="modal-project-file" type="file" name="project-file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"><p class="note">PDF, Word, JPG or PNG. Maximum total submission size: 8 MB.</p></div><button class="btn btn-primary" type="submit">Send project enquiry</button></form></div>`;
document.body.appendChild(modal);
const openModal=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');setTimeout(()=>modal.querySelector('#modal-name')?.focus(),50)};
const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')};
document.querySelectorAll('.project-trigger').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openModal()}));
modal.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});


// Protected certificate preview viewer (deterrence only; screenshots can never be fully prevented in a browser).
const certificateTriggers=document.querySelectorAll('.certificate-trigger');
if(certificateTriggers.length){
  const certificateViewer=document.createElement('div');
  certificateViewer.className='certificate-viewer';
  certificateViewer.setAttribute('aria-hidden','true');
  certificateViewer.innerHTML=`<div class="certificate-viewer-backdrop" data-close-certificate></div><div class="certificate-viewer-panel" role="dialog" aria-modal="true" aria-labelledby="certificate-viewer-title"><div class="certificate-viewer-head"><h3 id="certificate-viewer-title">Certificate preview</h3><button class="certificate-viewer-close" type="button" aria-label="Close certificate preview" data-close-certificate>×</button></div><div class="certificate-viewer-stage"><img class="protected-certificate" alt="Certificate preview" draggable="false"><div class="certificate-viewer-shield" aria-hidden="true"></div></div><div class="certificate-viewer-foot">Watermarked website preview for verification. Official copies are available directly from Borabu Builders on request.</div></div>`;
  document.body.appendChild(certificateViewer);
  const certImg=certificateViewer.querySelector('img');
  const certTitle=certificateViewer.querySelector('#certificate-viewer-title');
  const openCertificate=(trigger)=>{
    certImg.src=trigger.dataset.certSrc;
    certImg.alt=trigger.dataset.certTitle || 'Certificate preview';
    certTitle.textContent=trigger.dataset.certTitle || 'Certificate preview';
    certificateViewer.classList.add('open');
    certificateViewer.setAttribute('aria-hidden','false');
    document.body.classList.add('certificate-viewer-open');
    certificateViewer.querySelector('.certificate-viewer-close')?.focus();
  };
  const closeCertificate=()=>{
    certificateViewer.classList.remove('open');
    certificateViewer.setAttribute('aria-hidden','true');
    document.body.classList.remove('certificate-viewer-open');
    certImg.removeAttribute('src');
  };
  certificateTriggers.forEach(trigger=>trigger.addEventListener('click',()=>openCertificate(trigger)));
  certificateViewer.querySelectorAll('[data-close-certificate]').forEach(el=>el.addEventListener('click',closeCertificate));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&certificateViewer.classList.contains('open'))closeCertificate()});
  document.querySelectorAll('.protected-certificate').forEach(img=>{
    img.addEventListener('contextmenu',e=>e.preventDefault());
    img.addEventListener('dragstart',e=>e.preventDefault());
  });
  certificateViewer.addEventListener('contextmenu',e=>e.preventDefault());
}
