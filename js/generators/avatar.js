function AvatarGenerator(random) {

    this.generate=(model)=>{
        let out=[];
        model.forEach(row=>{
            let part=random.getElement(row);
            if (part) out.push(part);
        });
        return out;
    }
    
}