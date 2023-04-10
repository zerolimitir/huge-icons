import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookOpenStand = (
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
            d='M6.396 4.008c1.46.157 3.393.564 4.854 1.437v10.24c-1.461-.873-3.394-1.28-4.854-1.437C5.628 14.166 5 13.554 5 12.8V5.29c0-.754.628-1.365 1.396-1.282Zm11.208 10.24c-1.46.157-3.393.564-4.854 1.437V5.445c1.461-.873 3.394-1.28 4.854-1.437C18.372 3.925 19 4.536 19 5.29v7.51c0 .754-.628 1.365-1.396 1.448ZM2 12c0-1.263.586-2.39 1.5-3.123V12.8c0 1.638 1.328 2.788 2.736 2.94 1.475.158 3.27.575 4.453 1.365.79.527 1.832.527 2.622 0 1.183-.79 2.978-1.207 4.454-1.365 1.407-.152 2.735-1.302 2.735-2.94V8.877c.915.733 1.5 1.86 1.5 3.123v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookOpenStand);
export default ForwardRef;
