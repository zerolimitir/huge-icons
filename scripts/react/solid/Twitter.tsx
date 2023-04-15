import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTwitter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.58 2.047c-.734.14-1.395.816-1.539 1.573-.033.175-.041 2.114-.031 7.18.013 6.367.02 6.963.082 7.213.268 1.076.729 1.896 1.458 2.592.688.658 1.434 1.056 2.437 1.302.239.058.638.069 3.213.082 2.109.012 3.008.003 3.18-.03A2.034 2.034 0 0 0 18 20c0-.932-.71-1.791-1.617-1.957-.152-.027-1.022-.043-2.408-.043-1.431 0-2.243-.015-2.383-.044-.762-.159-1.411-.818-1.549-1.573-.027-.151-.043-.994-.043-2.31V12h3.098c2.107 0 3.166-.014 3.31-.044C17.31 11.768 18 10.92 18 10c0-.932-.71-1.791-1.617-1.957-.157-.028-1.276-.043-3.31-.043H10V5.902c0-1.377-.015-2.171-.044-2.31-.159-.762-.818-1.411-1.573-1.549a2.106 2.106 0 0 0-.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTwitter);
export default ForwardRef;
