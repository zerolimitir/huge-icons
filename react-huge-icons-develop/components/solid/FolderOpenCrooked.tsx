import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderOpenCrooked = (
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
            d='M2 6.375v11.25c0 .222.02.439.06.649l2.835-6.449c.923-2.15 3-3.575 5.334-3.575h9.076c-.18-1.687-1.557-3-3.229-3h-3.353c-.578 0-1.146-.16-1.644-.464L8.91 3.464A3.156 3.156 0 0 0 7.267 3H5.248C3.454 3 2 4.511 2 6.375Zm8.229 3.375h9.602c1.683 0 2.723 1.908 1.857 3.408l-3.267 5.657C17.638 20.171 16.228 21 14.707 21H5.248a3.18 3.18 0 0 1-2.308-1l3.33-7.578c.696-1.625 2.247-2.672 3.959-2.672Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenCrooked);
export default ForwardRef;
