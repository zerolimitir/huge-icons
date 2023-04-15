import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMusicQuaverThin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.214 1.484c-.845.141-1.531.797-1.86 1.776l-.094.28-.011 4.77-.011 4.77-.363-.32c-.871-.769-1.814-1.228-2.935-1.428-.468-.083-1.399-.082-1.88.002-1.846.323-3.377 1.452-4.198 3.097a5.743 5.743 0 0 0 2.563 7.706 5.715 5.715 0 0 0 5.146 0 5.746 5.746 0 0 0 2.889-3.35c.294-.877.273-.3.298-8.127l.022-7.04.088-.164c.181-.338.507-.524.848-.484.272.033.883.247 1.395.49a7.195 7.195 0 0 1 3.409 3.396 7.248 7.248 0 0 1-.94 7.762c-.287.348-.354.5-.33.748.048.506.62.828 1.069.602.331-.167 1.083-1.208 1.522-2.11.632-1.296.895-2.434.894-3.86-.001-1.436-.263-2.566-.894-3.86-.685-1.406-1.696-2.555-3.029-3.444-.988-.657-2.584-1.272-3.252-1.251-.077.002-.233.02-.346.039'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicQuaverThin);
export default ForwardRef;
