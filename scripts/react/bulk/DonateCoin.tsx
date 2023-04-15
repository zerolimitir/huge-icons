import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDonateCoin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.42 4.044c-.802.115-1.652.544-2.242 1.134-1.925 1.925-1.397 5.166 1.042 6.392a3.997 3.997 0 0 0 4.602-.748 3.997 3.997 0 0 0 0-5.644 4.036 4.036 0 0 0-3.402-1.134'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDonateCoin);
export default ForwardRef;
