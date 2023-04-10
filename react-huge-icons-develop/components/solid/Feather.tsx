import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFeather = (
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
            d='M21.981 4.065a1.8 1.8 0 0 0-2.047-2.046c-6.888.968-12.338 6.418-13.306 13.306a1.83 1.83 0 0 0 .093.894l-5.251 5.25a.75.75 0 0 0 1.06 1.061l5.251-5.25c.272.1.576.137.893.092a15.576 15.576 0 0 0 6.959-2.802c.405-.293.629-.77.629-1.27 0-.91.738-1.647 1.647-1.647.5 0 .977-.224 1.27-.63a15.576 15.576 0 0 0 2.802-6.958ZM6.721 16.22c.181.49.57.879 1.06 1.06l4.817-4.816a.75.75 0 1 0-1.061-1.06L6.721 16.22Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFeather);
export default ForwardRef;
