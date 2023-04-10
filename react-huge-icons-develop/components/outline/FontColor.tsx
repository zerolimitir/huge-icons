import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFontColor = (
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
            d='M9 11.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5H9v1.5Zm-4 6.5a.75.75 0 0 0 0 1.5v-1.5Zm14 1.5a.75.75 0 0 0 0-1.5v1.5Zm-14 0h14v-1.5H5v1.5Z'
        />
        <path
            fill='currentColor'
            d='m12 4 .692-.288a.75.75 0 0 0-1.384 0L12 4ZM6.308 15.711a.75.75 0 0 0 1.384.577l-1.384-.577Zm10 .577a.75.75 0 0 0 1.384-.577l-1.384.577Zm-5-12.576-5 12 1.384.576 5-12-1.384-.576Zm6.384 12-5-12-1.384.576 5 12 1.384-.577Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontColor);
export default ForwardRef;
