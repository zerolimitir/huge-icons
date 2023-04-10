import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBagMinus = (
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
            d='M15.25 6a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm0-1.5A4.75 4.75 0 0 0 7.25 6h1.5A3.25 3.25 0 0 1 12 2.75v-1.5Z'
        />
        <path
            fill='currentColor'
            d='m3.562 17.504.744.093-.744-.093Zm16.876 0-.744.093.744-.093Zm-1-8 .744-.093-.744.093Zm-14.876 0-.744-.093.744.093Zm3.97-2.754h6.937v-1.5H8.53v1.5Zm10.162 2.847 1 8 1.488-.186-1-8-1.488.186ZM16.469 21.25H7.53v1.5h8.938v-1.5ZM4.306 17.597l1-8-1.488-.186-1 8 1.488.186Zm3.225 3.653a3.25 3.25 0 0 1-3.225-3.653l-1.488-.186A4.75 4.75 0 0 0 7.53 22.75v-1.5Zm12.163-3.653a3.25 3.25 0 0 1-3.225 3.653v1.5a4.75 4.75 0 0 0 4.713-5.34l-1.488.187ZM15.469 6.75a3.25 3.25 0 0 1 3.225 2.847l1.488-.186A4.75 4.75 0 0 0 15.47 5.25v1.5ZM8.53 5.25a4.75 4.75 0 0 0-4.713 4.16l1.488.187A3.25 3.25 0 0 1 8.531 6.75v-1.5Zm.47 8a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5H9v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBagMinus);
export default ForwardRef;
