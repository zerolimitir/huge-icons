import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFontSize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.46 7.286a4.799 4.799 0 0 0-2.716 1.273c-1.053 1-1.612 2.477-1.466 3.871.179 1.698 1.145 3.091 2.66 3.833a4.748 4.748 0 0 0 5.072-.597l.23-.187v.239c0 .4.069.631.24.802.409.409 1.115.205 1.236-.358.03-.142.044-1.424.044-4.162s-.014-4.02-.044-4.162c-.121-.563-.827-.767-1.236-.358-.171.171-.24.402-.24.802v.239l-.23-.187a4.847 4.847 0 0 0-2.53-1.053 3.67 3.67 0 0 0-1.02.005m1.289 1.553c.77.185 1.44.642 1.916 1.307.771 1.076.771 2.632 0 3.708-.639.894-1.586 1.385-2.665 1.385s-2.026-.491-2.665-1.385c-.749-1.046-.77-2.587-.051-3.641.327-.479.877-.95 1.374-1.175a3.423 3.423 0 0 1 2.091-.199'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontSize);
export default ForwardRef;
