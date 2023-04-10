import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackagingArrowDown = (
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
            d='M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM2.629 6.25H21.37a4.02 4.02 0 0 0-.247-.346L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.125 1.5L2.877 5.904a4.003 4.003 0 0 0-.248.346Zm8.621 9.501-.72-.724a.747.747 0 0 0-1.06 0 .758.758 0 0 0 0 1.067l1.293 1.301a1.742 1.742 0 0 0 2.474 0l1.293-1.3a.758.758 0 0 0 0-1.068.747.747 0 0 0-1.06 0l-.72.724v-4.418a.752.752 0 0 0-.75-.755.752.752 0 0 0-.75.755v4.418Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingArrowDown);
export default ForwardRef;
