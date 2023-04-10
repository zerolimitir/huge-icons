import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOpenBoxArrowUp = (
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
            d='M12.753 6.472V4.685l.629.571a.742.742 0 0 0 1.067-.068.78.78 0 0 0-.062-1.077l-2.055-1.895a.492.492 0 0 0-.67 0l-2.052 1.9a.773.773 0 0 0-.06 1.065c.276.324.76.35 1.068.057l.654-.62v1.854a.75.75 0 0 0 .74.757c.41 0 .741-.339.741-.757Zm-8.737-.386 7.96 3.992-1.945 2.987L2.03 9.042l1.987-2.956Zm7.96 3.992 8.015-3.966L22.017 9.1l-8.02 3.965-2.021-2.987ZM4 11.739v5.196a2 2 0 0 0 1.094 1.783l6 3.047a2 2 0 0 0 1.812 0l6-3.047A2 2 0 0 0 20 16.935v-5.196l-5.33 2.707a1.485 1.485 0 0 1-1.918-.518L12 12.783l-.752 1.145c-.42.64-1.242.862-1.919.518L4 11.739Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxArrowUp);
export default ForwardRef;
