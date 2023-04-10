import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderOpenSearch = (
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
            d='M20.526 8H3.474a2 2 0 0 0-1.956 2.42l1.805 8.418A4 4 0 0 0 7.233 22h9.533a4 4 0 0 0 3.912-3.162l1.804-8.419A2 2 0 0 0 20.526 8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M20 8V7a3 3 0 0 0-3-3h-2.803a3 3 0 0 1-1.843-.634l-.94-.732A3 3 0 0 0 9.568 2H7a3 3 0 0 0-3 3v3h16Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.5 12.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM9.25 14.5a3.25 3.25 0 1 1 1.544 2.767L9.53 18.53a.75.75 0 0 1-1.06-1.06l1.263-1.264A3.235 3.235 0 0 1 9.25 14.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenSearch);
export default ForwardRef;
