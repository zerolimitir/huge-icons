import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSmileRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.58 9.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m8 0a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904M8.7 14.316c-.433.201-.585.705-.328 1.09.298.444 1.44 1.016 2.48 1.242.588.127 1.708.127 2.296 0 .921-.2 1.831-.62 2.341-1.081a.763.763 0 0 0 .229-.734c-.061-.227-.323-.49-.549-.551-.247-.066-.413-.019-.774.221a4.12 4.12 0 0 1-1.965.706c-.984.104-2.104-.178-2.836-.713-.361-.265-.605-.314-.894-.18'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmileRectangle);
export default ForwardRef;
