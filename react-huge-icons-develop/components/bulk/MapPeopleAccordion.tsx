import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapPeopleAccordion = (
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
            d='M16.75 17.16v4.648c1.692-.456 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.842v-9.67c0-.853-1.028-1.348-1.736-.872l-.161.107a5.485 5.485 0 0 1 .647 2.59 2.5 2.5 0 0 1-2 2.45v1.55a3.5 3.5 0 0 1-2 3.163Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M10.812 6.748c-.624-.392-1.29-.692-2.062-.757v12.76c1.278.108 2.264.858 3.25 1.608.986.75 1.972 1.5 3.25 1.607v-4.469a3.5 3.5 0 0 1-3.5-3.5v-1.55a2.5 2.5 0 0 1-2-2.45 5.482 5.482 0 0 1 1.062-3.249Z'
        />
        <path
            fill='currentColor'
            d='M7.25 6.15c-1.692.455-3.539 1.723-4.528 2.47A1.86 1.86 0 0 0 2 10.117v9.669c0 .853 1.028 1.348 1.736.872 1-.672 2.297-1.42 3.514-1.747V6.15Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.25 5.997a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0A3.993 3.993 0 0 0 11.784 8a3.983 3.983 0 0 0-.534 1.998 1 1 0 0 0 1 1 1 1 0 0 1 1 1v2a2 2 0 1 0 4 0v-2a1 1 0 0 1 1-1 1 1 0 0 0 1-1 4 4 0 0 0-4-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapPeopleAccordion);
export default ForwardRef;
