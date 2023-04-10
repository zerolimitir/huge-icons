import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackagingFavorite = (
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
            d='M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM2.629 6.25H21.37a4.02 4.02 0 0 0-.247-.346L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.125 1.5L2.877 5.904a4.003 4.003 0 0 0-.248.346Zm9.636 5.667-.265.265-.265-.265a1.875 1.875 0 0 0-2.652 2.651l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.856a1.875 1.875 0 0 0-2.652-2.651Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingFavorite);
export default ForwardRef;
