import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileFavouriteBent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.131 7.058c-.41.128-.813.487-1.004.893-.097.207-.107.274-.107.69 0 .44.006.472.13.72.08.16.525.75 1.16 1.539.934 1.16 1.05 1.29 1.247 1.39.161.081.276.11.443.11a.882.882 0 0 0 .443-.11c.198-.1.313-.229 1.286-1.444 1.25-1.561 1.251-1.563 1.251-2.227 0-.416-.007-.456-.129-.704a1.59 1.59 0 0 0-1.356-.907c-.514-.027-.839.103-1.266.508l-.232.219-.208-.202c-.277-.267-.421-.361-.694-.455-.265-.091-.707-.1-.964-.02m2.524 11.007c-.213.075-.469.296-.598.516a3.64 3.64 0 0 0-.223.545c-.3.918-.843 1.672-1.549 2.151-.504.342-1.264.635-1.805.695-.077.009 2.623.014 6 .011l6.14-.006.3-.086c.949-.271 1.658-.72 2.18-1.381.44-.555.78-1.31.78-1.729 0-.342-.245-.632-.624-.737-.108-.03-1.723-.043-5.296-.041-4.398.003-5.164.012-5.305.062'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileFavouriteBent);
export default ForwardRef;
