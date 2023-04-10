import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackagingArrowUp = (
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
            d='M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Zm-.877-12.096c.09.111.172.227.248.346H2.63c.076-.12.159-.235.248-.346L4.8 3.501A4 4 0 0 1 7.922 2h8.156A4 4 0 0 1 19.2 3.5l1.922 2.403Zm-7.653 7.689-.72-.725v4.419a.752.752 0 0 1-.75.755.752.752 0 0 1-.75-.755v-4.418l-.72.724a.747.747 0 0 1-1.06 0 .758.758 0 0 1 0-1.068l1.293-1.3a1.742 1.742 0 0 1 2.474 0l1.293 1.3a.758.758 0 0 1 0 1.068.747.747 0 0 1-1.06 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingArrowUp);
export default ForwardRef;
