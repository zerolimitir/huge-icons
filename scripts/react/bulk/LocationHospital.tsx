import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLocationHospital = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.14 5.063c-1.123.198-2.115.762-2.913 1.657-1.638 1.834-1.638 4.726 0 6.56C9.237 14.413 10.526 15 12 15c1.355 0 2.555-.498 3.527-1.464A4.883 4.883 0 0 0 17 10a4.873 4.873 0 0 0-1.468-3.529c-.622-.616-1.174-.962-1.952-1.222-.725-.242-1.698-.316-2.44-.186m-.773 2.305c.299.169.33.269.353 1.132l.02.76h2.52l.02-.76c.018-.694.028-.772.108-.902.274-.439.987-.42 1.242.034l.09.159v4.422l-.096.164c-.262.448-.964.462-1.236.025-.08-.13-.09-.208-.108-.902l-.02-.76h-2.52l-.02.76c-.018.694-.028.772-.108.902-.272.437-.974.423-1.236-.025l-.096-.164V7.78l.095-.156c.2-.331.65-.447.992-.256'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationHospital);
export default ForwardRef;
