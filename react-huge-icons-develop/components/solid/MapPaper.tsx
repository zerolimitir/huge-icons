import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapPaper = (
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
            d='M16.75 19.83c1.692-.457 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 15.863v-9.67c0-.853-1.028-1.348-1.736-.872-1 .672-2.297 1.42-3.514 1.748v12.76ZM12 18.38c-.986-.75-1.972-1.5-3.25-1.607V4.013c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v12.76c-1.278-.107-2.264-.857-3.25-1.607ZM2.722 6.642c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.076-3.514 1.748-.708.476-1.736-.02-1.736-.873V8.137c0-.585.255-1.142.722-1.495Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapPaper);
export default ForwardRef;
