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
            d='M20.238 10.514v.987a2.22 2.22 0 1 1-4.44 0v-.987l1.543.687c.43.19.922.19 1.353 0l1.544-.687Zm-5.829-.616v2.436a.416.416 0 1 1-.832 0V9.527a.32.32 0 0 0 .015.007l.817.364Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='m22.443 9.437-3.75-1.666a1.665 1.665 0 0 0-1.352 0l-3.749 1.666a.278.278 0 0 0 0 .507l3.75 1.666c.43.192.921.192 1.352 0l3.749-1.666a.278.278 0 0 0 0-.507Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.317 18.572h5.03a1.11 1.11 0 0 0 1.111-1.11c0-1.203-1.086-2.238-2.643-2.696a.526.526 0 0 0-.521.142l-.882.892a.555.555 0 0 1-.79 0l-.881-.892a.526.526 0 0 0-.521-.142 4.893 4.893 0 0 0-1.437.676c.962.88 1.53 1.961 1.534 3.13ZM11.782 8.207v1.505a3.387 3.387 0 1 1-6.775 0V8.207l2.356 1.047a2.54 2.54 0 0 0 2.063 0l2.356-1.047ZM2.89 7.266v3.716a.635.635 0 1 1-1.27 0v-4.28a.46.46 0 0 0 .024.011l1.246.554Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='m15.146 5.938-5.72-2.541a2.54 2.54 0 0 0-2.063 0L1.644 5.938a.423.423 0 0 0 0 .774l5.72 2.542a2.54 2.54 0 0 0 2.063 0l5.719-2.542a.423.423 0 0 0 0-.774Zm-8.699 8.347 1.345 1.36a.847.847 0 0 0 1.205 0l1.345-1.36a.8.8 0 0 1 .794-.216c2.376.698 4.033 2.276 4.033 4.111 0 .936-.758 1.694-1.694 1.694H3.314A1.694 1.694 0 0 1 1.62 18.18c0-1.835 1.657-3.413 4.033-4.111a.803.803 0 0 1 .794.216Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudents);
export default ForwardRef;
