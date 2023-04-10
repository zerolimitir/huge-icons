import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpringNotes = (
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
            d='M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-9.75 6.25a.75.75 0 1 0 0 1.5h10a.75.75 0 1 0 0-1.5h-10Zm-.75 4.75a.75.75 0 0 1 .75-.75h10a.75.75 0 1 1 0 1.5h-10a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h5a.75.75 0 1 0 0-1.5h-5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotes);
export default ForwardRef;
