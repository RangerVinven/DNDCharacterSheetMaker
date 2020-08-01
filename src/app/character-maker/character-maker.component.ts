import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-maker',
  templateUrl: './character-maker.component.html',
  styleUrls: ['./character-maker.component.scss']
})
export class CharacterMakerComponent {

  characterName: String;
  playerName: String;

  human: boolean;
  elf: boolean;
  dwarf: boolean;
  dragonborn: boolean;
  halfling: boolean;
  halfElf: boolean;
  halfOrc: boolean;
  orc: boolean;
  tiefling: boolean;
  gnome: boolean;

  barbarian: boolean;
  bard: boolean;
  cleric: boolean;
  druid: boolean;
  fighter: boolean;
  monk: boolean;
  paladin: boolean;
  ranger: boolean;
  rouge: boolean;
  sorcerer: boolean;
  warlock: boolean;
  wizard: boolean;

  strength: String;
  dexterity: String;
  constitution: String;
  intelligence: String;
  wisdom: String;
  charisma: String;

  // background: String;

  spellSheet: boolean;
  abilityModifiers: boolean;
  backgroundSheet: boolean;
  hitDice: boolean;

  constructor() { }

  editImage(downloadBtn) {
    //console.log(document.getElementsByClassName('characterName')[0].attributes[1].ownerElement.attributes[7].value);
    
    //Variables
    let characterName: String = this.characterName;
    let playerName: String = this.playerName;

    if(typeof this.characterName == "undefined") {
      characterName = "";
    }

    if(typeof this.playerName == "undefined") {
      playerName = "";
    }

    let race: String;

    if(this.human === true) {
      race = "Human";
    } else if(this.elf === true) {
      race = "Elf";
    } else if(this.halfElf === true) {
      race = "Half-Elf";
    } else if(this.dwarf === true) {
      race = "Dwarf";
    } else if(this.dragonborn === true) {
      race = "Dragonborn";
    } else if(this.halfling === true) {
      race = "Halfling";
    } else if(this.orc === true) {
      race = "Orc";
    } else if(this.halfOrc === true) {
      race = "Half-Orc";
    } else if(this.tiefling === true) {
      race = "Tiefling";
    } else if(this.gnome === true) {
      race = "Gnome";
    } else {
      race = "";
    }

    let charClass: String;
    let hitDie: String;

    if(this.barbarian === true) {
      charClass = "Barbarian";
      hitDie = "12";
    } else if(this.bard === true) {
      charClass = "Bard";
      hitDie = "8";
    } else if(this.cleric === true) {
      charClass = "Cleric";
      hitDie = "8";
    } else if(this.druid === true) {
      charClass = "Druid";
      hitDie = "8";
    } else if(this.fighter === true) {
      charClass = "Fighter";
      hitDie = "10";
    } else if(this.monk === true) {
      charClass = "Monk";
      hitDie = "8";
    } else if(this.paladin === true) {
      charClass = "Paladin";
      hitDie = "10";
    } else if(this.ranger === true) {
      charClass = "Ranger";
      hitDie = "10";
    } else if(this.rouge === true) {
      charClass = "Rouge";
      hitDie = "8";
    } else if(this.sorcerer === true) {
      charClass = "Sorcerer";
      hitDie = "6";
    } else if(this.warlock === true) {
      charClass = "Warlock";
      hitDie = "8";
    } else if(this.wizard === true) {
      charClass = "Wizard";
      hitDie = "6";
    } else {
      charClass = "";
    }

    let strength = this.strength;
    let dexterity = this.dexterity;
    let constitution = this.constitution;
    let wisdom = this.wisdom;
    let intelligence = this.intelligence;
    let charisma = this.charisma;

    if(typeof this.strength != "number") {
      strength = "";
    }
    
    if(typeof this.dexterity != "number") {
      dexterity = "";
    }

    if(typeof this.constitution != "number") {
      constitution = "";
    }

    if(typeof this.wisdom != "number") {
      wisdom = "";
    }

    if(typeof this.intelligence != "number") {
      intelligence = "";
    }

    if(typeof this.charisma != "number") {
      charisma = "";
    }

//------------------------------------------

    if(parseInt(strength.toString()) < 10) {
      strength = "0" + strength.toString();
    }
    
    if(parseInt(dexterity.toString()) < 10) {
      dexterity = "0" + dexterity.toString();
    }

    if(parseInt(constitution.toString()) < 10) {
      constitution = "0" + constitution.toString();
    }

    if(parseInt(wisdom.toString()) < 10) {
      wisdom = "0" + wisdom.toString();
    }

    if(parseInt(intelligence.toString()) < 10) {
      intelligence = "0" + intelligence.toString();
    }

    if(parseInt(charisma.toString()) < 10) {
      charisma = "0" + charisma.toString();
    }
    
    let spellSheet = this.spellSheet;
    let abilityModifiers = this.abilityModifiers;
    let backgroundSheet = this.backgroundSheet;
    let useHitDie = this.hitDice;

    let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    let imageObj = new Image();

    imageObj.src = "https://i.imgur.com/DY20ohj.jpg";

    imageObj.onload = function() {
      
      canvas.height = canvas.width * (imageObj.height / imageObj.width);

      canvas.width = imageObj.width * 0.5;
      canvas.height = imageObj.height * 0.5;
      context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

      //Character Name (Max 23)
      context.font = "15px Calibri";

      context.fillText(characterName.toString(), 40, 63);

      //Player Name
      context.font = "10px Calibri";

      context.fillText(playerName.toString(), 385, 50);
      
      //Class
      context.font = "10px Calibri";

      context.fillText(charClass.toString(), 221, 50);
      
      //Race
      context.font = "10px Calibri";

      context.fillText(race.toString(), 221, 72);

      //Strength
      context.font = "12px Calibri";
      context.fillText(strength.toString(), 40, 162);

      //Dexterity
      context.font = "12px Calibri";        
      context.fillText(dexterity.toString(), 40, 222);

      //Constitution
      context.font = "12px Calibri";
      context.fillText(constitution.toString(), 40, 280);

      //Intelligence
      context.font = "12px Calibri";
      context.fillText(intelligence.toString(), 40, 338);

      //wisdom
      context.font = "12px Calibri";
      context.fillText(wisdom.toString(), 40, 396);

      //Charisma
      context.font = "12px Calibri";
      context.fillText(charisma.toString(), 40, 454);

      //context.fillText("20", 40, 200) for modifier;

      if(useHitDie === true) {
        context.font = "10px Calibri";
        context.fillText("d"+hitDie.toString(), 210, 267);
        //context.fillText(hitDie.toString(), 200, 350);
      }

      if(abilityModifiers === true) {
        let strengthMod;
        let dexterityMod;
        let constitutionMod;
        let intelligenceMod;
        let wisdomMod;
        let charismaMod;

        if(typeof strength == "number") {
          strengthMod = (strength-10)/2;
          strengthMod = strengthMod = Math.floor(strengthMod);
          if(strengthMod < 10 && strengthMod != 0) {strengthMod = "+" + strengthMod;}
        }

        if(typeof dexterity == "number") {
          dexterityMod = (dexterity-10)/2;
          dexterityMod = Math.floor(dexterityMod).toString();
          if(dexterityMod < 10 && dexterityMod != 0) {dexterityMod = "+" + dexterityMod;}
        }

        if(typeof constitution == "number") {
          constitutionMod = (constitution-10)/2;
          constitutionMod = Math.floor(constitutionMod).toString();
          if(constitutionMod < 10 && constitutionMod != 0) {constitutionMod = "+" + constitutionMod;}
        }

        if(typeof intelligence == "number") {
          intelligenceMod = (intelligence-10)/2;
          intelligenceMod = Math.floor(intelligenceMod).toString();
          if(intelligenceMod < 10 && intelligenceMod != 0) {intelligenceMod = "+" + intelligenceMod;}
        }

        if(typeof wisdom == "number") {
          wisdomMod = (wisdom-10)/2;
          wisdomMod = Math.floor(wisdomMod).toString();
          if(wisdomMod < 10 && wisdomMod != 0) {wisdomMod = "+" + wisdomMod;}         
        }
        
        if(typeof charisma == "number") {
          charismaMod = (charisma-10)/2;
          charismaMod = Math.floor(charismaMod).toString();
          if(charismaMod < 10 && charismaMod != 0) {charismaMod = "+" + charismaMod;}
        }
        
        let startingPos = 140;
        let addition = 58;

        context.font = "12px Calibri";

        if(typeof strengthMod == "undefined") {
          strengthMod = "";
        }

        if(typeof dexterityMod == "undefined") {
          dexterityMod = "";
        }

        if(typeof constitutionMod == "undefined") {
          constitutionMod = "";
        }

        if(typeof intelligenceMod == "undefined") {
          intelligenceMod = "";
        }

        if(typeof wisdomMod == "undefined") {
          wisdomMod = "";
        }

        if(typeof charismaMod == "undefined") {
          charismaMod = "";
        }

//------------------------------------------------

        if(strengthMod == "") {
          strengthMod = " 0";
        }

        if(dexterityMod == "") {
          dexterityMod = " 0";
        }

        if(constitutionMod == "") {
          constitutionMod = " 0";
        }

        if(intelligenceMod == "") {
          intelligenceMod = " 0";
        }

        if(wisdomMod == "") {
          wisdomMod = " 0";
        }

        if(charismaMod == "") {
          charismaMod = " 0";
        }

//------------------------------------

        if(parseInt(strength.toString()) < 10) {
          Math.floor((parseInt(strength.toString())-10)/2);
          strengthMod = Math.floor((parseInt(strength.toString())-10)/2).toString();
        }

        if(parseInt(dexterity.toString()) < 10) {
          Math.floor((parseInt(dexterity.toString())-10)/2);
          dexterityMod = Math.floor((parseInt(dexterity.toString())-10)/2).toString();
        }

        if(parseInt(constitution.toString()) < 10) {
          Math.floor((parseInt(constitution.toString())-10)/2);
          constitutionMod = Math.floor((parseInt(constitution.toString())-10)/2).toString();
        }

        if(parseInt(intelligence.toString()) < 10) {
          Math.floor((parseInt(intelligence.toString())-10)/2);
          intelligenceMod = Math.floor((parseInt(intelligence.toString())-10)/2).toString();
        }

        if(parseInt(wisdom.toString()) < 10) {
          Math.floor((parseInt(wisdom.toString())-10)/2);
          wisdomMod = Math.floor((parseInt(wisdom.toString())-10)/2).toString();
        }

        if(parseInt(charisma.toString()) < 10) {
          Math.floor((parseInt(charisma.toString())-10)/2);
          charismaMod = Math.floor((parseInt(charisma.toString())-10)/2).toString();
        }

        context.fillText(strengthMod, 40, startingPos);
        startingPos = startingPos+addition;

        context.fillText(dexterityMod, 40, startingPos);
        startingPos = startingPos+addition;

        context.fillText(constitutionMod, 40, startingPos);
        startingPos = startingPos+addition;

        context.fillText(intelligenceMod, 40, startingPos);
        startingPos = startingPos+addition;

        context.fillText(wisdomMod, 40, startingPos);
        startingPos = startingPos+addition;

        context.fillText(charismaMod, 40, startingPos);
        
      }
    }
    
    // downloadBtn = document.getElementById('download');

    // downloadBtn.href = characterSheet;
    // downloadBtn.click();
    
    // console.log("Button Clicked")

    // let link = document.createElement("a");
    // link.download = "characterSheet.png";
    // canvas.toBlob(function(blob) {
    //   link.href = URL.createObjectURL(blob);
    //   link.click();
    // }, "image/png");

    if(backgroundSheet === true) {
      this.editBackground();
    }

    if(spellSheet === true) {
      this.showSpellSheet();
    }

    // this.editBackground();

    // downloadBtn.href = characterSheet;
    // downloadBtn.download = characterSheet;
    // downloadBtn.click()

  }

  editBackground() {
    let canvas = document.getElementById("backgroundCanvas") as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    let imageObj = new Image();

    let characterName: String = this.characterName;

    if(typeof this.characterName == "undefined") {
      characterName = "";
    }

    imageObj.src = "https://i.imgur.com/Q0f0jSq.jpeg";

    imageObj.onload = function() {
      canvas.height = canvas.width * (imageObj.height / imageObj.width);

      canvas.width = imageObj.width * 0.5;
      canvas.height = imageObj.height * 0.5;
      context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

      //Character Name (Max 23)
      context.font = "15px Calibri";
      context.fillText(characterName.toString(), 40, 65);

    }
  }

  showSpellSheet() {

    let canvas = document.getElementById("spellSheetCanvas") as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    let imageObj = new Image();

    imageObj.src = "https://i.imgur.com/qJAYFUi.jpeg";

    imageObj.onload = function() {
      canvas.height = canvas.width * (imageObj.height / imageObj.width);

      canvas.width = imageObj.width * 0.5;
      canvas.height = imageObj.height * 0.5;
      context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
    }
  }

  //     let enterLength = Math.ceil(background.length/24);
  //     let increment = 0;

  //     for(let i = 0;i <= enterLength; i++) {
  //       let currentPrint = background.substring(i*24, i*24+24);

  //       //Background (24 Characters per line)
  //       context.fillText(currentPrint, 26, 325+increment);
        
  //       increment = increment+15;
  //     }    
  
}