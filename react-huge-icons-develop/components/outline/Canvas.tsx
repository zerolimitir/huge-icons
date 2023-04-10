import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCanvas = (
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
            d='M11.25 4a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 19a.75.75 0 0 0 1.5 0h-1.5Zm1.5-3a.75.75 0 0 0-1.5 0h1.5Zm-7.42 3.665a.75.75 0 1 0 1.34.67l-1.34-.67Zm3.34-3.33a.75.75 0 1 0-1.34-.67l1.34.67Zm8.66 4a.75.75 0 1 0 1.34-.67l-1.34.67Zm-.66-4.67a.75.75 0 1 0-1.34.67l1.34-.67ZM7 4.75h10v-1.5H7v1.5ZM19.25 7v8h1.5V7h-1.5ZM17 17.25H7v1.5h10v-1.5ZM4.75 15V7h-1.5v8h1.5ZM7 17.25A2.25 2.25 0 0 1 4.75 15h-1.5A3.75 3.75 0 0 0 7 18.75v-1.5ZM19.25 15A2.25 2.25 0 0 1 17 17.25v1.5A3.75 3.75 0 0 0 20.75 15h-1.5ZM17 4.75A2.25 2.25 0 0 1 19.25 7h1.5A3.75 3.75 0 0 0 17 3.25v1.5ZM7 3.25A3.75 3.75 0 0 0 3.25 7h1.5A2.25 2.25 0 0 1 7 4.75v-1.5Zm5.75.75V2h-1.5v2h1.5Zm0 17v-3h-1.5v3h1.5Zm-6.08 1.335 2-4-1.34-.67-2 4 1.34.67Zm12-.67-2-4-1.34.67 2 4 1.34-.67Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCanvas);
export default ForwardRef;
