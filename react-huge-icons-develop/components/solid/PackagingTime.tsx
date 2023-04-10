import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackagingTime = (
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
            d='M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Zm-.877-12.096c.09.111.172.227.248.346H2.63c.076-.12.159-.235.248-.346L4.8 3.501A4 4 0 0 1 7.922 2h8.156A4 4 0 0 1 19.2 3.5l1.922 2.403ZM16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4.223-2.1a.6.6 0 0 1 .6.6v1.57h.946a.6.6 0 1 1 0 1.2h-1.546a.6.6 0 0 1-.6-.6V12.5a.6.6 0 0 1 .6-.6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingTime);
export default ForwardRef;
