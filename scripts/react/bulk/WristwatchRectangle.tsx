import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWristwatchRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.24 5.062c-.581.124-.98.294-1.48.631a4.071 4.071 0 0 0-1.717 2.762c-.059.426-.059 6.664 0 7.09.155 1.11.8 2.142 1.732 2.771.382.259.692.405 1.165.552l.36.112h7.4l.36-.112a3.977 3.977 0 0 0 1.165-.552 4.042 4.042 0 0 0 1.733-2.802c.057-.448.057-6.58 0-7.028a4.219 4.219 0 0 0-.692-1.786c-.428-.632-1.229-1.239-1.966-1.491-.616-.21-.596-.209-4.328-.206-2.803.003-3.522.014-3.732.059m4.031 3.24a.734.734 0 0 1 .413.398c.068.147.074.29.075 1.76 0 .98-.015 1.658-.041 1.749-.081.293-.19.368-1.407.975-1.223.609-1.296.633-1.582.514a.734.734 0 0 1-.413-.398.73.73 0 0 1 .144-.82c.053-.055.475-.289.938-.519l.842-.419v-1.333c0-1.428.009-1.503.212-1.724a.898.898 0 0 1 .539-.244.858.858 0 0 1 .28.061'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWristwatchRectangle);
export default ForwardRef;
