import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignpostBig = (
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
            d='M12.5 3h-1a1 1 0 0 0-1 1v.5h3V4a1 1 0 0 0-1-1Zm-1 20h1a1 1 0 0 0 1-1v-.5h-3v.5a1 1 0 0 0 1 1Zm2-10.5v1h-3v-1h3Zm3.5-1H5.414a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 .707-.293H17a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-10 3h11.586a1 1 0 0 1 .707.293l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-.707.293H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostBig);
export default ForwardRef;
