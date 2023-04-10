import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderReload = (
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
            d='M22 17v-7a4 4 0 0 0-4-4h-2.667a4 4 0 0 1-2.4-.8l-1.866-1.4a4 4 0 0 0-2.4-.8H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.591 11.409a2.25 2.25 0 0 0-2.341-.53.75.75 0 1 1-.5-1.415 3.75 3.75 0 0 1 4.787 4.785.75.75 0 0 1-1.415-.498 2.25 2.25 0 0 0-.531-2.342Zm.116 4.17a.75.75 0 0 1-.458.957 3.75 3.75 0 0 1-4.785-4.785.75.75 0 1 1 1.414.498 2.25 2.25 0 0 0 2.873 2.873.75.75 0 0 1 .956.458Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderReload);
export default ForwardRef;
