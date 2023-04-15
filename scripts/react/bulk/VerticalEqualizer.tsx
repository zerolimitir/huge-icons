import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVerticalEqualizer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.811 1.278a.883.883 0 0 0-.481.374c-.065.119-.071.389-.081 3.761-.008 2.58.002 3.68.034 3.798a.8.8 0 0 0 .515.508.746.746 0 0 0 .922-.518c.028-.105.038-1.35.031-3.788-.011-3.579-.012-3.635-.093-3.772a.807.807 0 0 0-.847-.363m-12.178.243a.729.729 0 0 0-.347.435c-.031.093-.046.597-.046 1.59V5h1.52V3.546c0-1.501-.01-1.608-.169-1.837-.179-.257-.652-.349-.958-.188m.178 12.757a.883.883 0 0 0-.481.374c-.065.119-.071.389-.081 3.761-.008 2.58.002 3.68.034 3.798a.8.8 0 0 0 .515.508.746.746 0 0 0 .922-.518c.028-.105.038-1.35.031-3.788-.011-3.579-.012-3.635-.093-3.772a.807.807 0 0 0-.847-.363M17.24 20.53c0 .993.016 1.586.045 1.689.059.213.293.441.513.5.4.108.812-.12.92-.51.025-.091.042-.75.042-1.679V19h-1.52v1.53'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalEqualizer);
export default ForwardRef;
