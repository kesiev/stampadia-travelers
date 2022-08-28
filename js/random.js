
function Random(modifiers) {

    if (!modifiers) modifiers={};

    let
        useSeed = modifiers.seed !== undefined,
        seed = modifiers.seed,
        noRandom = modifiers.noRandom;

    this.getFloat=()=>{
        if (noRandom) return 0.001;
        else if (useSeed) {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        } else return Math.random();
    }

    this.getBoolean=()=>{
        return this.getFloat()>0.5;
    }

    this.getIndex=(list)=>{
        return Math.floor(this.getFloat()*list.length);
    }

    this.fromRange=(range)=>{
        return range[0]+Math.floor(this.getFloat()*(range[1]-range[0]+1));
    }
    
    this.getElement=(list,except)=>{
        if (list) {
            if (except) {
                let sublist=list.filter(e=>e!=except);
                if (sublist.length)
                    return sublist[this.getIndex(sublist)];
                else
                    return false;
            } else
                return list[this.getIndex(list)];
        } else
            return false;
    }

    this.removeElement=(list)=>{
        if (list) {
            let
                pos=this.getIndex(list),
                item=list[pos];
            list.splice(pos,1);
            return item;
        } else
            false;
    }

    this.getLabel=(label)=>{
        return [ label, this.getFloat() ];
    }

    this.createBag=function(list,looping) {
        let indexes=[];
        list.forEach((item,id)=>indexes.push(id));
        return {
            looping:looping,
            indexes:indexes,
            list:list
        }
    }

    this.cloneBag=function(bag) {
        return {
            looping:bag.looping,
            indexes:Tools.clone(bag.indexes),
            list:bag.list
        }
    }

    this.resetBag=function(bag) {
        bag.indexes.length=0;
        bag.list.forEach((item,id)=>bag.indexes.push(id));
    }

    this.getFromBag=function(bag,except) {
        if (bag.indexes.length) {
            if (except) {
                let list=this.getBagIndexesExcept(bag,except);
                if (list.length) {
                    let pick=this.getElement(list);
                    bag.indexes.splice(bag.indexes.indexOf(pick),1);
                    return bag.list[pick];
                } else if (bag.looping) {
                    this.resetBag(bag);
                    return this.getFromBag(bag,except);
                } else return false;
            } else return bag.list[this.removeElement(bag.indexes)];
        } else if (bag.looping) {
            this.resetBag(bag);
            return this.getFromBag(bag,except);
        } else return false;
    }

    this.getFromBagHaving=function(bag,having) {
        if (bag.indexes.length) {
            if (having) {
                let list=this.getBagIndexesExcept(bag);
                if (list.length) {
                    list = list.filter(id=>{
                        let item = bag.list[id];
                        for (let k in having) {
                            if (having[k].none && !item[k]) return true;
                            if (having[k].inRange && ((item[k][0]<=having[k].inRange) && (item[k][1]>=having[k].inRange))) return true;
                        }
                        return false;
                    });
                    if (list.length) {
                        let pick=this.getElement(list);
                        bag.indexes.splice(bag.indexes.indexOf(pick),1);
                        return bag.list[pick];
                    } else {
                        this.resetBag(bag);
                        return this.getFromBagHaving(bag,having);
                    }
                } else if (bag.looping) {
                    this.resetBag(bag);
                    return this.getFromBagHaving(bag,having);
                } else return false;
            } else return bag.list[this.removeElement(bag.indexes)];
        } else if (bag.looping) {
            this.resetBag(bag);
            return this.getFromBagHaving(bag,having);
        } else return false;
    }

    this.getBagIndexesExcept=function(bag,except) {
        let indexes=except ? except.map(item=>this.getBagId(bag,item)) : 0;
        return bag.indexes.filter(id=>!indexes || (indexes.indexOf(id)==-1));
    }

    this.getBagId=function(bag,item) {
        return bag.list.indexOf(item);
    }

    this.isInBag=function(bag,item) {
        let id=this.getBagId(bag,item);
        if (id==-1)
            return false;
        else
            return bag.indexes.indexOf(id)!=-1;
    }

    this.removeFromBag=function(bag,item) {
        let
            position=bag.indexes.indexOf(this.getBagId(bag,item));
        if (position != -1)
            bag.indexes.splice(position,1);
    }

}

if (typeof module != "undefined")
    module.exports={
        Random:Random
    };