import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDestinationDashedTwo = (
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
            d='M20.225 8.607C21.055 7.56 22 6.123 22 5c0-2-1.343-3-3-3s-3 1-3 3.21c0 1.204.892 2.519 1.703 3.466.68.795 1.871.75 2.522-.07ZM19 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 22c2 0 4-3.79 4-6a4 4 0 0 0-8 0c0 2.21 2 6 4 6Zm0-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11.53-5.47a.75.75 0 1 0-1.06-1.06l-.161.16a.75.75 0 1 0 1.06 1.061l.161-.16Zm-2.089 2.09a.75.75 0 1 0-1.06-1.061l-.322.321a.75.75 0 1 0 1.06 1.061l.322-.321Zm-2.25 2.25a.75.75 0 1 0-1.06-1.061l-.161.16a.75.75 0 1 0 1.06 1.061l.161-.16Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDestinationDashedTwo);
export default ForwardRef;
