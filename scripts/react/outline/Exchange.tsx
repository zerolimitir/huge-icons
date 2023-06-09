import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgExchange = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.66 3.307a.696.696 0 0 0-.344.341.807.807 0 0 0-.012.644c.035.07.471.537.968 1.036l.904.908-4.918.015c-5.412.017-5.123.004-5.978.268-2.012.622-3.556 2.369-3.943 4.461-.087.474-.126 1.965-.058 2.219.156.573.911.737 1.295.281.158-.187.186-.359.186-1.145 0-1.066.108-1.573.498-2.326.554-1.074 1.519-1.807 2.862-2.176.137-.037 1.593-.054 6.14-.071 6.696-.025 6.098.006 6.338-.325a.737.737 0 0 0 .122-.642c-.041-.156-.226-.355-1.653-1.789-1.07-1.075-1.661-1.64-1.767-1.689-.195-.092-.478-.096-.64-.01m3.151 6.971a.88.88 0 0 0-.27.139c-.262.199-.275.258-.306 1.323-.016.528-.048 1.041-.073 1.14-.356 1.436-1.314 2.572-2.578 3.058-.784.302-.212.277-6.847.301l-5.963.021-.169.112a.731.731 0 0 0-.325.833c.041.156.223.353 1.633 1.768.873.876 1.654 1.627 1.735 1.67.27.14.685.07.877-.149.196-.223.253-.582.131-.826-.035-.07-.462-.528-.948-1.017l-.884-.888 4.938-.014c5.491-.016 5.163 0 6.038-.293a5.744 5.744 0 0 0 3.656-3.656c.231-.689.279-1.054.282-2.1.002-.857-.004-.93-.08-1.059a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgExchange);
export default ForwardRef;
