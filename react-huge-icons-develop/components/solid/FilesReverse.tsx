import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilesReverse = (
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
            d='M17 14V6a4 4 0 0 0-4-4h-2.343a4 4 0 0 0-.907.104V4A4.75 4.75 0 0 1 5 8.75H3.104c-.069.295-.104.6-.104.907V14a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4ZM7.828 3.172a4 4 0 0 1 .422-.367V4A3.25 3.25 0 0 1 5 7.25H3.805a4 4 0 0 1 .367-.422l3.656-3.656ZM11 22a4.001 4.001 0 0 1-3.71-2.5H13a5.5 5.5 0 0 0 5.5-5.5V6.29A4.001 4.001 0 0 1 21 10v8a4 4 0 0 1-4 4h-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilesReverse);
export default ForwardRef;
