import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDiploma = (
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
        <path fill='currentColor' d='M13 21v-5.5h4V21l-2-1-2 1Z' opacity={0.4} />
        <path
            fill='currentColor'
            d='M22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M18 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.25 7A.75.75 0 0 1 6 6.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 7Zm0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDiploma);
export default ForwardRef;
