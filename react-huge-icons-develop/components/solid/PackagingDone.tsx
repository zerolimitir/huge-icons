import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackagingDone = (
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
            d='M22 18.062V8.465c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.465v9.597a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Zm-.877-12.096c.09.112.172.227.248.346H2.63c.076-.119.159-.234.248-.346L4.8 3.563a4 4 0 0 1 3.123-1.5h8.156a4 4 0 0 1 3.123 1.5l1.922 2.403Zm-5.559 6.59a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03L9.47 13.477a.75.75 0 1 0-.938 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingDone);
export default ForwardRef;
