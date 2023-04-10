import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStudents = (
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
            d='M20.238 10.616v.987a2.22 2.22 0 1 1-4.44 0v-.987l1.543.687c.43.191.922.191 1.353 0l1.544-.687ZM14.41 10v2.436a.416.416 0 0 1-.833 0V9.629a.25.25 0 0 0 .016.007l.817.364Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='m22.443 9.129-3.749-1.666a1.665 1.665 0 0 0-1.353 0l-3.748 1.666a.278.278 0 0 0 0 .507l3.748 1.666c.431.192.922.192 1.353 0l3.749-1.666a.278.278 0 0 0 0-.507Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.317 18.264h5.031a1.11 1.11 0 0 0 1.11-1.11c0-1.203-1.086-2.238-2.643-2.696a.526.526 0 0 0-.52.142l-.883.892a.555.555 0 0 1-.789 0l-.882-.892a.526.526 0 0 0-.52-.142 4.892 4.892 0 0 0-1.437.676c.961.88 1.53 1.96 1.533 3.13Zm-4.535-9.956v1.506a3.387 3.387 0 0 1-6.774 0V8.308l2.355 1.047a2.54 2.54 0 0 0 2.064 0l2.355-1.047Zm-8.891-.94v3.716a.635.635 0 1 1-1.27 0V6.802a.46.46 0 0 0 .023.012l1.247.554Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m15.146 6.04-5.72-2.542a2.54 2.54 0 0 0-2.063 0L1.644 6.04a.423.423 0 0 0 0 .774l5.72 2.542a2.54 2.54 0 0 0 2.063 0l5.719-2.542a.423.423 0 0 0 0-.774Zm-8.699 8.346 1.346 1.36a.847.847 0 0 0 1.204 0l1.345-1.36c.208-.21.511-.3.795-.216 2.375.699 4.032 2.277 4.032 4.112 0 .935-.758 1.694-1.693 1.694H3.314a1.694 1.694 0 0 1-1.694-1.694c0-1.835 1.657-3.413 4.033-4.112a.803.803 0 0 1 .794.216Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudents);
export default ForwardRef;
