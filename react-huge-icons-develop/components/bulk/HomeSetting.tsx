import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomeSetting = (
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
            d='M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.576 10h.848c.469 0 .849.358.849.8 0 .506.54.827.985.585l.045-.024c.406-.221.925-.09 1.159.293l.424.692c.235.383.095.872-.31 1.093a.639.639 0 0 0 0 1.122c.405.22.544.71.31 1.093l-.424.692c-.234.383-.753.514-1.16.293l-.044-.024a.666.666 0 0 0-.985.585c0 .442-.38.8-.849.8h-.848c-.469 0-.849-.358-.849-.8a.666.666 0 0 0-.985-.585l-.045.024c-.406.221-.925.09-1.159-.293l-.424-.692c-.234-.383-.095-.872.31-1.093a.639.639 0 0 0 0-1.122.776.776 0 0 1-.31-1.093l.424-.692c.234-.383.753-.514 1.16-.293l.044.024a.666.666 0 0 0 .985-.585c0-.442.38-.8.849-.8ZM12 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeSetting);
export default ForwardRef;
