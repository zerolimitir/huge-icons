import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBloodPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.59 2.561c-.469.118-1.174.7-2.551 2.104C5.725 8.044 4 11.281 4 14.12c0 2.736 1.52 5.404 3.865 6.784 2.483 1.461 5.787 1.461 8.27 0 2.594-1.527 4.146-4.602 3.823-7.576-.327-3.004-2.581-6.551-6.318-9.939-.771-.7-1.012-.832-1.551-.853a2.432 2.432 0 0 0-.499.025m.77 7.797a.873.873 0 0 1 .26.239l.12.17.013 1.234.012 1.234 1.208.012c1.371.015 1.417.024 1.644.345.098.139.116.204.116.408s-.018.269-.117.409c-.231.329-.234.329-1.623.343l-1.228.012-.012 1.235-.013 1.234-.121.172c-.166.237-.346.334-.619.334s-.453-.097-.619-.334l-.121-.172-.013-1.234-.012-1.235-1.228-.012c-1.389-.014-1.392-.014-1.623-.343-.098-.138-.117-.206-.117-.402a.7.7 0 0 1 .345-.64l.162-.107 1.23-.013 1.231-.012.012-1.228c.013-1.203.015-1.23.106-1.376.223-.36.617-.467 1.007-.273'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBloodPlus);
export default ForwardRef;
