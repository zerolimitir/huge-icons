import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDirectionUpDouble = (
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
            d='M6.414 17.468a.75.75 0 0 0 1.055.118L12 13.96l4.532 3.626a.75.75 0 1 0 .936-1.172l-5-4a.75.75 0 0 0-.937 0l-5 4a.75.75 0 0 0-.117 1.054Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.414 11.469a.75.75 0 0 0 1.055.117L12 7.96l4.532 3.626a.75.75 0 1 0 .936-1.172l-5-4a.75.75 0 0 0-.937 0l-5 4a.75.75 0 0 0-.117 1.055Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionUpDouble);
export default ForwardRef;
