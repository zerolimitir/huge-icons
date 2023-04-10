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
            d='M8 14.9c0-4.072 3.837-8.089 5.83-9.9a1.724 1.724 0 0 1 2.34 0C18.164 6.81 22 10.827 22 14.9c0 3.5-2.65 7.1-7 7.1s-7-3.6-7-7.1Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M6.81 3.067C5.06 4.75 2 8.197 2 11.689 2 14.8 4.272 18 8 18c.234 0 .462-.012.683-.037A7.316 7.316 0 0 1 8 14.9c0-3.115 2.246-6.199 4.194-8.287-.973-1.47-2.146-2.72-3.004-3.546a1.7 1.7 0 0 0-2.38 0Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.264 19.143a.75.75 0 0 1 .594-.879c1.277-.247 2.15-1.26 2.41-2.427a.75.75 0 0 1 1.464.326c-.369 1.658-1.637 3.196-3.59 3.574a.75.75 0 0 1-.878-.594Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTransfusion);
export default ForwardRef;
