import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStopwatch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.46 1.265c-1.054.06-2.382.297-2.811.501-.431.206-.519.849-.162 1.182.115.108.356.212.489.212.055 0 .315-.053.58-.117.915-.224 1.281-.263 2.464-.261 1.163.001 1.598.049 2.503.279.458.116.549.12.748.037a.726.726 0 0 0 .358-1.066c-.164-.279-.492-.404-1.549-.588-.815-.142-1.935-.219-2.62-.179m.24 7.051a.734.734 0 0 0-.398.413c-.053.126-.062.398-.062 1.78v1.631l-.217.113c-.264.138-.657.538-.793.808a2.018 2.018 0 0 0 0 1.878c.138.273.527.667.802.813.828.438 1.765.294 2.401-.368.615-.64.743-1.522.337-2.323-.136-.27-.529-.67-.793-.808l-.217-.113-.001-1.64c-.001-1.509-.007-1.653-.075-1.8-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStopwatch);
export default ForwardRef;
