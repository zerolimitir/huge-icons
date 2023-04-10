import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoofHomeShare = (
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
            d='M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989ZM14.2 9.5a1.8 1.8 0 0 0-1.799 1.861l-1.973.986a1.8 1.8 0 1 0 0 2.805l1.973.987-.001.061a1.8 1.8 0 1 0 .672-1.403l-1.973-.986a1.769 1.769 0 0 0 0-.122l1.973-.986A1.8 1.8 0 1 0 14.2 9.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeShare);
export default ForwardRef;
