import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPlaster = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.894 5.682a.758.758 0 0 0-.398.565c-.047.341.01.427.84 1.266.42.426.841.819.934.874.441.261 1.05-.031 1.117-.535.048-.353-.016-.452-.821-1.267-.41-.416-.826-.807-.924-.87a.753.753 0 0 0-.748-.033M12.2 9.091c-.105.031-.498.398-1.569 1.463-.816.812-1.458 1.483-1.497 1.564a1.119 1.119 0 0 0-.053.712c.046.169.148.287.932 1.079.484.488.945.919 1.024.956.196.094.486.115.713.054.174-.047.313-.173 1.619-1.473.805-.8 1.459-1.484 1.498-1.564a1.25 1.25 0 0 0 .085-.365c.03-.406-.046-.516-1.045-1.504-.727-.72-.917-.887-1.052-.926a1.265 1.265 0 0 0-.655.004m-6.085 6.428c-.453.137-.661.72-.4 1.123.063.098.463.522.89.944.784.774.894.854 1.175.854.261 0 .551-.19.685-.45.086-.166.078-.469-.018-.654-.044-.086-.446-.519-.894-.962-.659-.652-.843-.814-.973-.849a.763.763 0 0 0-.465-.006'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlaster);
export default ForwardRef;
