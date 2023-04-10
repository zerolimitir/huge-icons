import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgViewPrivacy = (
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
            d='M21.13 8.853a3.085 3.085 0 0 1 0 4.294C19.174 15.205 15.816 18 12 18c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 6.795 8.184 4 12 4c3.816 0 7.174 2.795 9.13 4.853Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18.5 13.75a.75.75 0 0 0-.75.75V16a.75.75 0 0 1-1.5 0v-1.5a2.25 2.25 0 0 1 4.5 0V16a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 0-.75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M20 15h-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgViewPrivacy);
export default ForwardRef;
