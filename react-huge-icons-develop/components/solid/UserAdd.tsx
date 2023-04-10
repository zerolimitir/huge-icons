import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserAdd = (
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
            d='M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3 10c0 2.21-3.134 4-7 4s-7-1.79-7-4 3.134-4 7-4 7 1.79 7 4Zm1-4.25a.75.75 0 0 1-.75-.75v-1.25H16a.75.75 0 0 1 0-1.5h1.25V8a.75.75 0 0 1 1.5 0v1.25H20a.75.75 0 0 1 0 1.5h-1.25V12a.75.75 0 0 1-.75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserAdd);
export default ForwardRef;
