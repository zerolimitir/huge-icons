import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTransfusion = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.81 3.066C5.06 4.751 2 8.197 2 11.69c0 2.837 1.89 5.748 5.05 6.239A8.764 8.764 0 0 1 6.5 14.9c0-2.483 1.156-4.811 2.435-6.654a24.43 24.43 0 0 1 2.362-2.868A23.446 23.446 0 0 0 9.19 3.066a1.7 1.7 0 0 0-2.38 0ZM8 14.9c0-4.072 3.837-8.09 5.83-9.9a1.724 1.724 0 0 1 2.34 0C18.164 6.81 22 10.827 22 14.9c0 3.5-2.65 7.1-7 7.1s-7-3.6-7-7.1Zm7.264 4.242a.75.75 0 0 1 .594-.879c1.277-.247 2.15-1.259 2.41-2.426a.75.75 0 0 1 1.464.326c-.369 1.657-1.637 3.196-3.59 3.573a.75.75 0 0 1-.878-.594Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTransfusion);
export default ForwardRef;
