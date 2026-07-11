import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// shared input/textarea class
const inputCls =
  'w-full p-[15px] mb-[15px] border border-[#111] bg-transparent text-[0.9rem] outline-none transition-[border-color] duration-300 focus:border-[#D91A21]';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="grid grid-cols-1 gap-10 bg-white px-[5%] md:grid-cols-2 md:gap-[50px] md:px-[8%] lg:gap-[60px] lg:px-[10%]"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div className="contact-left reveal opacity-0 translate-y-10 transition-all duration-1000 ease-in-out [&.active]:opacity-100 [&.active]:translate-y-0">
        <h2 className="leading-[0.9] mb-5 font-black" style={{ fontSize: 'clamp(2.5rem,10vw,4rem)' }}>
          GET IN<br />THE HOUSE
        </h2>
        <p className="mt-5" style={{ color: '#bbb', fontSize: 'clamp(0.9rem,2.5vw,1rem)' }}>
          appleboy285@gmail.com
        </p>
      </div>

      <form id="contactForm" className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-in-out [&.active]:opacity-100 [&.active]:translate-y-0" encType="multipart/form-data">
        <input className={inputCls} type="text" name="name"     placeholder="FULL NAME"                  required />
        <input className={inputCls} type="tel"  name="whatsapp" placeholder="WHATSAPP NO."               required />
        <textarea className={`${inputCls} resize-y`} name="source" placeholder="HOW DID YOU HEAR ABOUT US?" required />

        <div className="mb-5">
          <label
            htmlFor="portfolio"
            className="upload-box flex flex-col items-center justify-center py-10 px-5 border-2 border-dashed border-[#ddd] bg-[#fafafa] cursor-pointer rounded-[4px] text-center transition-all duration-[400ms] [cubic-bezier(0.165,0.84,0.44,1)] hover:border-[#D91A21] hover:bg-white hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] [&.has-file]:border-[#111] [&.has-file]:border-solid [&.has-file]:bg-[#f0f0f0] md:py-[30px]"
          >
            <FontAwesomeIcon icon={faCloudUploadAlt} className="text-[3rem] h-10 w-10 text-[#888] mb-[15px] transition-[color] duration-300 group-hover:text-[#D91A21]" />
            <span className="text-[0.85rem] font-[800] tracking-[2px] text-[#111] mb-[5px]">PORTFOLIO UPLOAD</span>
            <span className="text-[0.65rem] text-[#666] tracking-[1px] uppercase">PDF, ZIP, DOC (MAX 10MB)</span>
            <span id="fileNameDisplay" className="mt-[15px] text-[0.75rem] font-bold text-[#D91A21] break-all max-w-full" />
          </label>
          <input type="file" id="portfolio" name="portfolio" accept=".pdf,.doc,.docx,.zip" required className="hidden" />
        </div>

        <button
          type="submit"
          className="submit-btn w-full py-[18px] font-[800] uppercase text-[0.85rem] text-white cursor-pointer border-none mt-[10px] bg-[#D91A21] disabled:bg-[#d9d9d9] disabled:text-[#959595] disabled:cursor-not-allowed md:py-5"
          disabled
        >
          Apply
        </button>

        <p
          id="contactStatus"
          className="hidden mt-[14px] text-[#008000] text-[0.95rem] tracking-[0.03em]"
        >
          Thanks! Your application was sent successfully.
        </p>
      </form>
    </section>
  );
}
