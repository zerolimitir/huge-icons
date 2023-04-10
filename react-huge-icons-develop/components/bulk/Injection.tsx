import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInjection = (
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
            d='M9.371 14.917a.75.75 0 0 1-.024 1.06l-5.83 5.566a.75.75 0 0 1-1.035-1.085l5.829-5.565a.75.75 0 0 1 1.06.024Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.905 2.47a.75.75 0 0 1 1.06 0l1.401 1.4.014.014a.95.95 0 0 1 .013.014l1.4 1.4a.75.75 0 1 1-1.06 1.06l-.884-.883-2.297 2.298a.75.75 0 0 1-1.061-1.06l2.298-2.299-.884-.884a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M13.485 6.535 8.3 11.721a2 2 0 0 0-.566 1.131l-.236 1.65a2 2 0 0 0 2.263 2.263l1.65-.236a2 2 0 0 0 1.131-.566l5.186-5.185a2 2 0 0 0 0-2.828l-1.414-1.415a2 2 0 0 0-2.829 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m9.761 16.765 1.65-.236a2 2 0 0 0 1.131-.565l3.772-3.771-7.071-1.415-.943.943a2 2 0 0 0-.566 1.131l-.236 1.65a2 2 0 0 0 2.263 2.263Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInjection);
export default ForwardRef;
