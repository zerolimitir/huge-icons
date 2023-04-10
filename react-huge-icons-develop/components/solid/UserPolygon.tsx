import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserPolygon = (
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
            d='M9.922 2.571a4.067 4.067 0 0 1 4.156 0l4.844 2.868C20.208 6.201 21 7.61 21 9.132v5.736c0 1.523-.792 2.931-2.078 3.693l-.621.367-4.222 2.5a4.067 4.067 0 0 1-4.157 0l-4.223-2.5-.62-.367C3.791 17.799 3 16.39 3 14.868V9.132c0-1.523.792-2.931 2.078-3.693l4.844-2.868Zm6.173 12.633C15.023 14.457 13.583 14 12 14c-1.583 0-3.023.457-4.095 1.204-.515.359-.407 1.095.13 1.418l3.45 2.07a1 1 0 0 0 1.03 0l3.45-2.07c.537-.323.645-1.06.13-1.418ZM12 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserPolygon);
export default ForwardRef;
