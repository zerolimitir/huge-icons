import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCctv = (
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
        <path fill='currentColor' d='M12 18a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z' opacity={0.4} />
        <path
            fill='currentColor'
            d='M2 7.5A1.5 1.5 0 0 1 3.5 6h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 2 7.5Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 12a4 4 0 0 1 4 4v1.064A8.963 8.963 0 0 1 12 18a8.963 8.963 0 0 1-4-.936V16a4 4 0 0 1 4-4Zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCctv);
export default ForwardRef;
