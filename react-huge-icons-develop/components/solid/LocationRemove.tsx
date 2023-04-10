import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationRemove = (
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
            d='M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889ZM17 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-5.884-1.945a.75.75 0 1 0-1.06 1.061l.883.884-.883.884a.75.75 0 0 0 1.06 1.06l.884-.883.884.884a.75.75 0 0 0 1.06-1.061L13.061 11l.884-.884a.75.75 0 1 0-1.061-1.06L12 9.938l-.884-.884Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationRemove);
export default ForwardRef;
