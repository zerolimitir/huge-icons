import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpringNotesEdit = (
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
            d='M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesEdit);
export default ForwardRef;
